type Result<T, E = Error> =
    | { success: true; value: T}
    | { success: false; error: E};

function safeDivide(numerator: number, denominator: number): Result<number, string> {
    if (denominator === 0) {
        return {success: false, error: 'Cannot divide by 0'};
    }
    else {
        return {success: true, value: numerator / denominator};
    }
}