import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "gwehfp8q",
    dataset: "production",
    apiVersion: "22-03-25",
    useCdn: true,
});