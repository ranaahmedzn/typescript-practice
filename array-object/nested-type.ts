interface App {
    name: string;
    version: string;
    settings: {
        theme: string;
        notifications: boolean;
        languages: string[];
    };
    additionalInfo?: Record<string, unknown>; // Record<string, unknown> (Unknown or dynamic keys)
}


const app : App = {
    name: "MyApp",
    version: "1.0.0",
    settings: {
        theme: "dark",
        notifications: true,
        languages: ["en", "bd", "de"]
    },
    additionalInfo: {
        developer: "John Doe",
        license: "MIT"
    }
}

console.log(app);