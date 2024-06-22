export function SanitizeArray(inputString: string | string[]): string[] {
    if (Array.isArray(inputString)) {
        // If input is already an array (e.g., from req.body), ensure all items are trimmed
        return inputString.map((item) => String(item).trim()).filter((item) => item !== '');
    } else {
        // If input is a comma-separated string, split and trim each item
        let unsanitizedArray = inputString.split(',');
        return unsanitizedArray.map((item) => item.trim()).filter((item) => item !== '');
    }
}
