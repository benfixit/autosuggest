## Contents

- [Introduction](#introduction)

  - [Language](#language)
  - [UI](#ui)
  - [Data](#data)

- [Setup](#setup)
  - [Installation](#installation)
- [Usage](#usage)
  - [Starting the app](#starting-the-app)
  - [Adding data to the app](#adding-data-to-the-app)
  - [Running tests](#running-tests)
- [Structural Breakdown of App](#structural-breakdown-of-app)

## Introduction

This is an auto suggestion application that uses the Trie data structure under the hood.

The UI is divided into 3 sections. On the left is a search box, type into the search box to search for words in the dictionary. On the top-right is the list of all the words in the dictionary while on the bottom-right is an input box that can be used to add words to the dictionary. New entered words can be searched for in the search section.

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

### Adding data to the app

Once the app is up and running, you need to add data using the add word widget at the bottom-right. To truly enjoy the power of autosuggestion, enter words that share the same prefix e.g ant, anteater, antelope, bag, baggage, cat, catalonia.

Once words are added, they will immediately appear on the list at the top-right and can be searched for too using the search box on the left.

The added data is also persisted to local storage, that way, you do not lose data when you refresh the app. However, to clear all data, you need to manually delete the key from local storage. One of the improvements would be to add a delete word/dictionary functionality.

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
- Add unit tests.
- Improve the design - Mobile first approach.
- Debounce the search.
- Implement data removal functionality.
