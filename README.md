## Contents

- [Introduction](#introduction)

  - [Language](#language)
  - [UI](#ui)
  - [Data](#data)

- [Setup](#setup)
  - [Installation](#installation)
- [Usage](#usage)
  - [Starting the app](#starting-the-app)
  - [Running tests](#running-tests)
- [Structural Breakdown of App](#structural-breakdown-of-app)

## Introduction

This is an auto suggestion application that uses the Trie data structure under the hood.

### Language

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Lodash](https://lodash.com/)

### UI

- [React](https://reactjs.org/)

### Data

- [React Context](https://reactjs.org/docs/context.html)

## Setup

### Installation

```bash
git clone https://github.com/benfixit/autosuggest.git
cd autosuggest
yarn install
```

## Usage

### Starting the app

From your project root type start command

```bash
yarn start
```

### Running tests

From your project root type start command

```bash
yarn test
```

## Structural Breakdown of App

The app is broken down structurally into 3 different types of modules: classes, components and providers

### Classes

These are traditional ES classes. The Trie and TrieNode classes live here.

### Components

These are basically React components. The AutoSuggest, WordList, AddWord and App components live here.

### Providers

These are components that make use of the Context API to make data available to their children. Two contexts are created and consumed in the app: TrieContext and WordListContext.

## Possible Improvements

- Use CSS modules or styled components to avoid global state pollution.
- Bundle the Autosuggest functionality into a package that exposes some API.
- Use TypeScript.
- Add Validation for supported characters.
- Add more unit tests.
- Improve the design - Mobile first approach.
