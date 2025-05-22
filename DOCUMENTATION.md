# Code Examples Repository Documentation

This repository contains a comprehensive collection of code examples that show how to use different technologies, with a primary focus on Java and the Spring ecosystem. The examples are accompanied by blog posts on [https://reflectoring.io](https://reflectoring.io).

## Languages and Percentages

The repository consists of code examples in various programming languages. Here's the breakdown by file count:

| Language    | Files | Percentage |
|-------------|-------|------------|
| Java        | 1,613 | 66.40%     |
| Properties  | 201   | 8.27%      |
| JavaScript  | 154   | 6.34%      |
| XML         | 139   | 5.72%      |
| Markdown    | 139   | 5.72%      |
| YAML        | 77    | 3.17%      |
| TypeScript  | 44    | 1.81%      |
| HTML        | 34    | 1.39%      |
| CSS         | 20    | 0.82%      |
| Kotlin      | 8     | 0.32%      |

## Directory Summary

The repository is organized into the following main directories:

### Spring Ecosystem
- **spring-boot** (1,460 files): Contains numerous Spring Boot examples covering a wide range of topics including actuators, security, testing, data access, REST APIs, and more.
- **spring-cloud** (83 files): Examples for Spring Cloud features like Feign clients, contract testing, and distributed tracing.
- **spring-data** (47 files): Demos for Spring Data features including REST repositories and converters.
- **spring-security** (36 files): Examples for implementing security in Spring applications.
- **spring-security-jwt** (43 files): JWT-based authentication examples with Spring Security.
- **spring-webflux** (17 files): Examples for the reactive web framework in Spring.
- **spring-reactive-architecture** (84 files): A complete reactive architecture using Spring Boot.

### Core Java
- **core-java** (355 files): Examples for core Java features including streams, functional programming, annotations, and more.
- **java-hashes** (8 files): Examples for creating hashes in Java.
- **immutables** (25 files): Demonstrates usage of the Immutables library for creating immutable objects.

### Testing Frameworks
- **junit** (23 files): Examples for JUnit testing framework.
- **mockito** (58 files): Examples for mocking with Mockito.
- **pact** (136 files): Contract testing examples with Pact.
- **testing** (37 files): General testing utilities and examples.

### JavaScript/TypeScript
- **nodejs** (220 files): Examples for Node.js applications including Express, React, GraphQL, and more.
- **node** (10 files): Additional Node.js examples.

### Design Patterns and Architecture
- **patterns** (22 files): Examples of design patterns.
- **solid** (65 files): Examples demonstrating SOLID principles.
- **reactive** (19 files): Examples of reactive programming.
- **resilience4j** (112 files): Examples of resilience patterns with Resilience4j.

### Cloud and Infrastructure
- **aws** (77 files): Examples for AWS services including S3, SNS, SQS, and CloudWatch.

### Other Technologies
- **apache-http-client** (43 files): Examples for Apache HTTP client.
- **graphql** (20 files): Examples for GraphQL implementations.
- **kotlin** (15 files): Examples for Kotlin programming language.
- **logging** (53 files): Examples for different logging frameworks.
- **mapstruct** (24 files): Examples for object mapping with MapStruct.
- **archunit** (10 files): Examples for enforcing architecture with ArchUnit.
- **tools** (16 files): Various development tools examples including JaCoCo.

## Main Files Overview

### Key Configuration Files
- **pom.xml**: Found in most Java-based projects, defines Maven project configuration.
- **.github/workflows/**: CI/CD workflow configuration for GitHub Actions.
- **application.properties/yml**: Spring Boot configuration files found in most spring-boot examples.

### Main Application Entry Points
- Spring Boot applications typically have a main class with `@SpringBootApplication` annotation.
- Node.js applications typically have an `index.js` or `app.js` as entry point.

### Notable Examples
- **spring-boot/spring-boot-actuator**: Demonstrates Spring Boot's monitoring capabilities.
- **spring-boot/modular**: Shows how to create a modular Spring Boot application.
- **spring-security/getting-started**: Basic Spring Security implementation.
- **core-java/streams**: Examples for Java Stream API usage.
- **nodejs/nodejs-react-feature-flag-launchdarkly**: Feature flag implementation with React.
- **resilience4j**: Various examples of circuit breaking, retry patterns, and other resilience patterns.

### Documentation
- **README.md**: Found at the root and in most subdirectories, provides overview and usage instructions.
- Various subdirectories contain their own README files with specific information about the examples they contain.

## Repository Structure

The repository follows a consistent structure where each example is typically organized in its own directory with:

1. Source code in `src/main`
2. Test code in `src/test` (for Java projects)
3. Configuration files at the root of the example directory
4. A README.md file explaining the example and linking to related blog posts

Many examples are also accompanied by a blog post on [reflectoring.io](https://reflectoring.io) that provides more detailed explanation and context.