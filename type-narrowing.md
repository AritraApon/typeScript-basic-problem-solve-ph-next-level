# Type Narrowing and Type Hierarchy in TypeScript

## Introduction

TypeScript has a powerful type system that helps developers write safer and more predictable code. Understanding its type hierarchy and type narrowing is important because they help us control how values are used and prevent unexpected errors.

## 1. Understanding Type Hierarchy

![TypeScript Type Hierarchy](https://i.ibb.co.com/Xr9d2Kzb/Screenshot-2026-11-04-232132.png)

The diagram illustrates the relationship between different TypeScript types.

- **Top Types (`any`, `unknown`):** These types can accept values of any type. However, `any` disables type checking, while `unknown` requires type checking before performing operations.
- **Core Types:** Basic types such as `string`, `number`, and `boolean`.
- **Literal Types:** Specific values of a type, such as `"pending"` or `"admin"`.
- **Void:** Represents a function that does not return a meaningful value.
- **Undefined:** Represents a value that has not been assigned.
- **Null:** Represents an intentional absence of a value.
- **Never:** The bottom type, representing values that never occur. For example, a function that always throws an error.

*Note: This diagram is a simplified conceptual representation, not the complete TypeScript assignability hierarchy.*

## 2. What is Type Narrowing?

Type Narrowing is the process of checking a variable's type so TypeScript can understand exactly what type of value is being used.

### Example 1: typeof Operator

The `typeof` operator checks primitive types such as strings and numbers.

```ts
function processValue(value: string | number): string {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }

    return value.toFixed(2);
}
```

Here, TypeScript understands that `value` is a string inside the `if` block and a number outside it.

### Example 2: instanceof Operator

The `instanceof` operator checks whether an object belongs to a particular class.

```ts
class Dog {
    bark(): string {
        return "Woof!";
    }
}

function getSound(value: Dog | Date): string {
    if (value instanceof Dog) {
        return value.bark();
    }

    return value.toDateString();
}
```

### Example 3: in Operator

The `in` operator checks whether a specific property exists inside an object.

```ts
type Admin = {
    name: string;
    permissions: string[];
};

type Member = {
    name: string;
    memberId: number;
};

function describeUser(user: Admin | Member): string {
    if ("permissions" in user) {
        return user.permissions.join(", ");
    }

    return String(user.memberId);
}
```

## Conclusion

Type Hierarchy helps us understand how different types relate to each other, while Type Narrowing helps us safely work with union types.

By using `typeof`, `instanceof`, and the `in` operator, we can write more reliable TypeScript code without depending on `any`.