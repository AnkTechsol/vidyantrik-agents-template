from smolagents import tool

@tool
def calculator(operation: str, a: float, b: float) -> str:
    """
    A simple calculator tool to perform basic arithmetic operations.

    Args:
        operation: The operation to perform. Supported: 'add', 'subtract', 'multiply', 'divide'.
        a: The first number.
        b: The second number.
    """
    if operation == "add":
        return str(a + b)
    elif operation == "subtract":
        return str(a - b)
    elif operation == "multiply":
        return str(a * b)
    elif operation == "divide":
        if b == 0:
            return "Error: Division by zero"
        return str(a / b)
    else:
        return f"Error: Unsupported operation '{operation}'. Please use 'add', 'subtract', 'multiply', or 'divide'."
