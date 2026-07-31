import { z } from 'zod';

const addressSchema = z.object({
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  geo: z.object({
    lat: z.string(),
    lng: z.string(),
  }),
});

const companySchema = z.object({
  name: z.string(),
  catchPhrase: z.string(),
  bs: z.string(),
});

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  phone: z.string(),
  website: z.string(),
  address: addressSchema,
  company: companySchema
});

const userListSchema = z.array(userSchema);

type User = z.infer<typeof userSchema>;

type AppState = {
  users: User[];
  selectedUser: User | null;
};

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const app = document.querySelector<HTMLDivElement>('#app');

if (!(app instanceof HTMLDivElement)) {
  throw new Error('App container not found.');
}

const state: AppState = {
  users: [],
  selectedUser: null,
};

app.innerHTML = `
  <div class="page-shell">
    <header class="page-header">
      <div>
        <p class="eyebrow">JSON Placeholder</p>
        <h1>Users Directory</h1>
      </div>
    </header>

    <main>
      <section class="status-bar">
        <p id="status-message">Loading users…</p>
      </section>

      <section class="card-grid" id="user-grid" aria-live="polite"></section>
    </main>
  </div>
`;

const statusMessageElement = document.querySelector<HTMLParagraphElement>('#status-message');
const userGridElement = document.querySelector<HTMLElement>('#user-grid');

if (!(statusMessageElement instanceof HTMLParagraphElement) || !(userGridElement instanceof HTMLElement)) {
  throw new Error('Required UI elements were not found.');
}

const statusMessage = statusMessageElement;
const userGrid = userGridElement;


function renderCards(users: User[]): void {
  userGrid.innerHTML = '';

  if (users.length === 0) {
    userGrid.innerHTML = '<div class="empty-state">No users available.</div>';
    return;
  }

  for (const user of users) {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <h2>${user.name}</h2>
      <p class="meta">@${user.username} • ${user.email}</p>
      <button class="detail-button" data-user-id="${user.id}">Details</button>
    `;
    userGrid.append(card);
  }
}

function renderModal(user: User): void {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <div class="modal-header">
        <h2 class="modal-title">${user.name}</h2>
        <button class="close-button" aria-label="Close modal">×</button>
      </div>
      <ul class="modal-list">
        <li><strong>Username:</strong> ${user.username}</li>
        <li><strong>Email:</strong> ${user.email}</li>
        <li><strong>Phone:</strong> ${user.phone}</li>
        <li><strong>Website:</strong> ${user.website}</li>
        <li><strong>Company:</strong> ${user.company.name}</li>
        <li><strong>City:</strong> ${user.address.city}</li>
        <li><strong>Street:</strong> ${user.address.street}</li>
      </ul>
    </div>
  `;

  const closeButton = overlay.querySelector<HTMLButtonElement>('.close-button');
  if (!(closeButton instanceof HTMLButtonElement)) {
    throw new Error('Modal close button not found.');
  }

  closeButton.addEventListener('click', () => {
    overlay.remove();
  });

  overlay.addEventListener('click', (event: MouseEvent) => {
    if (event.target === overlay) {
      overlay.remove();
    }
  });

  document.body.append(overlay);
}

async function loadUsers(): Promise<void> {
  try {
    statusMessage.textContent = 'Loading users…';

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}.`);
    }

    const unknownData: unknown = await response.json();
    const parsedUsers = userListSchema.safeParse(unknownData);

    if (!parsedUsers.success) {
      throw new Error('The API response did not match the expected user schema.');
    }

    state.users = parsedUsers.data;
    renderCards(state.users);
    statusMessage.textContent = `Loaded ${state.users.length} users successfully.`;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'An unexpected error occurred.';
    statusMessage.textContent = `Unable to load users: ${message}`;
    userGrid.innerHTML = `<div class="empty-state">${message}</div>`;
  }
}

userGrid.addEventListener('click', (event: MouseEvent) => {
  const clickedTarget = event.target;

  if (!(clickedTarget instanceof HTMLButtonElement)) {
    return;
  }

  const targetId = clickedTarget.dataset.userId;
  if (targetId === undefined) {
    return;
  }

  const user = state.users.find((item) => item.id.toString() === targetId) ?? null;

  if (user !== null) {
    state.selectedUser = user;
    renderModal(user);
  }
});

void loadUsers();
