# Contributing

STEPBible is a volunteer-run organization. We welcome contributions!

## Setting Up Your Phone

1. Enable Developer mode on your phone
2. Download "Expo" on the App Store of your phone. This app will allow you to preview changes as you develop.

## Setting Up Your Computer

### Setting Up Windows

1. Install WSL for Windows, and choose Ubuntu as your OS
1. Download Android Studio (optional)

### Setting Up Mac

1. Download Xcode
1. Download Android Studio (optional)

## Setting Up Step Bible

Check that Node.js is installed:

```
node --version
```

Check if Yarn is installed:

```
yarn --version
```

Install Yarn if needed: https://yarnpkg.com/lang/en/docs/install

Install some global dependences:

```
npm install -g expo-cli
```

Check out the repo:

```
cd ~
git clone https://github.com/STEPBible/stepmobile.git
cd stepmobile
```

Install dependencies:

```
cd ~/stepmobile
yarn install
```

Copy a pre-built database into the repo:

_need a database? Ask for one, or build one using some instructions further below_

```
cp ~/Downloads/bible.db ~/stepmobile/app/assets/
```

Start the app to see everything in action:

```
cd ~/stepmobile
expo start
```

Change the Connection mode to "Tunnel". This allows you to run the app on your phone, even if your phone is on a different network.

For Android, scan the QR code on your phone, or for iOS, have it text a link to you.

1. Change color of one of the views; for example, backgroundColor to 'magenta'
1. Celebrate 😀
