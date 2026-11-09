# Object-Oriented Programming (OOP): The Four Pillars

## Introduction

Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects rather than just functions. It helps developers write reusable, maintainable, and organized code. OOP is built on four fundamental pillars: Encapsulation, Abstraction, Inheritance, and Polymorphism.

## Understanding the Four Pillars

![OOP Four Pillars](https://i.ibb.co.com/QvkHp5cd/image.png)

### 1. Encapsulation

Encapsulation means wrapping data and methods together inside a class while restricting direct access to internal properties.

```ts
class BankAccount {
    private balance: number = 0;

    deposit(amount: number): void {
        this.balance += amount;
    }

    getBalance(): number {
        return this.balance;
    }
}
```

Here, `private` prevents direct access to the balance property.

### 2. Abstraction

Abstraction hides implementation details and exposes only essential functionality. In TypeScript, we can use abstract classes and methods.

```ts
abstract class Animal {
    abstract makeSound(): void;
}
```

### 3. Inheritance

Inheritance allows one class to reuse properties and methods from another class using the `extends` keyword.

```ts
class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}
```

### 4. Polymorphism

Polymorphism means one interface or method can have different behaviors depending on the object.

```ts
class Cat extends Animal {
    makeSound(): void {
        console.log("Meow!");
    }
}

const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach(animal => animal.makeSound());
```

The same method `makeSound()` produces different outputs depending on the object.

## Conclusion

The four pillars of OOP make software development more structured and efficient. Encapsulation protects data, Abstraction hides complexity, Inheritance promotes code reuse, and Polymorphism provides flexibility. Understanding these concepts is essential for building scalable applications using TypeScript.