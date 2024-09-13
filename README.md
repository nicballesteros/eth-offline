# eth-offline

A standalone HTML file that can parse a bip39 seed into derived wallet accounts.

Best for use on an air-gapped computer. Can be used to sign any type of message.

## Installation

Clone and run `npm run build` for a single HTML file. This built file is up to date in the repo so this is not required

If you'd like to build a normal Vue project, you can remove the Single File Plugin in the Vite Config File.

## Installation on an airgapped computer

Before banishing the disk to offline, install a compatible browser (one that allows camera access (see below)).

This single HTML file can be installed by calling `wget https://raw.githubusercontent.com/nicballesteros/eth-offline/main/dist/index.html`;

On Windows use `curl`.

## Multi-sig Smart Contracts

This tool is useful for Multi-Sig Smart Contracts. These smart contracts require multiple addresses to sign a transaction. Validation is usually done by signing a hash.
Read the hash with the built in QR Code Reader and sign it with this tool and receive an output QR code to send back to your online computer.

## TailsOS

When used with TailsOS, the installed browsers do not give access to the camera for security reasons. Firefox or Chromium can be installed as additional software.
Set up persistant storage, run `sudo apt update`, run `sudo apt install chromium`, and save this HTML file in the persistant file system for access at any time.
