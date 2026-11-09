# Type vs Interface in TypeScript: Choosing the Right Tool

## Introduction

TypeScript provides both `type` aliases and `interface` declarations to describe the shape of data. They often look similar, but they have different capabilities. Understanding those differences helps us write code that is easier to extend and maintain.

## Detailed Explanation

An `interface` is mainly used to describe the structure of objects and classes. Interfaces can be extended, and they support declaration merging. Declaration merging means that two interfaces with the same name are combined into one definition.

```ts
interface User {
  name: string;
}

interface User {
  email: string;
}

const user: User = {
  name: "Apon",
  email: "apon@example.com"
};
```

A `type` alias can describe object shapes too, but it can also represent unions, intersections, tuples, primitives, and other type expressions.

```ts
type Status = "pending" | "success" | "failed";

type UserProfile = {
  name: string;
  age: number;
};

type Admin = UserProfile & {
  permissions: string[];
};
```

Both can extend object structures: interfaces use `extends`, while type aliases commonly use intersection (`&`). However, a type alias cannot be reopened through declaration merging.

## Conclusion

Choose `interface` when defining an object or class contract that may be extended or merged. Choose `type` when you need unions, tuples, intersections, or a named type expression. Both are useful, and consistency within a project matters more than treating one as universally better.
