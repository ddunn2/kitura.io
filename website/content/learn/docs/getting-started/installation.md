---
path: "/docs/getting-started/installation"
title: Installation
---
#Installation

To use Kitura, you first need to install Swift. You can install Swift on macOS and/or Linux.

Kitura works on both macOS and Linux, so choose whichever platform you prefer.

---

##Install Swift on macOS

Download and install the latest version of [Xcode](https://developer.apple.com/xcode/) from the App Store.

To verify your Swift installation, open a Terminal, enter the ‘swift’ command and pass the ‘--version’ flag:

```
swift --version
```

You should see something similar like this:

```
Apple Swift version x.x.x (LLVM ..., Clang ..., Swift ...)
```

> If you see an error message, such as ‘swift: command not found’, you will need to install the Xcode Command Line Tools. Within the Terminal type:
> ```
> xcode-select --install
> ```
> Alternatively you can install Command Line Tools within Xcode:
> 1. Open Xcode Preferences using the shortcut: ⌘ + ,
> 2. Click on the Locations tab.
> 3. From the Command Line Tools drop down menu ensure the latest version of Xcode is selected.

---

##Install Swift for Linux

Kitura is tested on Ubuntu 14.04 LTS (trusty), 16.04 LTS (xenial) and 18.04 LTS (bionic).

First ensure your source list is up to date by running the following:

```
sudo apt-get update
```

Next install the required Linux system packages:

```
sudo apt-get install clang libicu-dev libcurl4-openssl-dev libssl-dev libpython2.7
```

Download Swift for the platform you're using.

You can then extract files to system root.

> If you choose a directory other than the system root, you will need to run the following:
> ```
> export PATH=/<path to Swift>/usr/bin:"${PATH}"
> ```

Where `<path to Swift>` is the path to your Swift binary.

You can verify Swift has been installed successfully by running:

```
swift --version
```

You should see something similar like this:

```
Swift version x.x.x
```

---

## Next steps
[Hello World](./hello-world): Create a simple "Hello World" Kitura server.

[Create a Server](./create-server-cli): Create a Kitura server with scaffolding for a full application.
