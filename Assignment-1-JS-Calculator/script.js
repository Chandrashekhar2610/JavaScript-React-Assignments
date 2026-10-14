
const display = document.getElementById("display");
let expression = "";

function appendValue(value) {
    if (display.value === "Error") {
        expression = "";
    }

    expression += value;
    display.value = expression || "0";
}

function clearDisplay() {
    expression = "";
    display.value = "0";
}

function deleteLast() {
    expression = expression.slice(0, -1);
    display.value = expression || "0";
}

function calculate() {
    try {
        if (!expression || !/^[0-9+\-*/%.()\s]+$/.test(expression)) {
            throw new Error("Invalid input");
        }

        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (typeof result !== "number" || !Number.isFinite(result)) {
            throw new Error("Invalid result");
        }

        expression = String(
            Number(result.toPrecision(12))
        );

        display.value = expression;
    } catch (error) {
        display.value = "Error";
        expression = "";
    }
}
