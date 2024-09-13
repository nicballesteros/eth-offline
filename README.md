# eth-offline

A standalone HTML file that can parse a bip39 seed into derived wallet accounts.

Best for use on an air-gapped computer. Can be used to sign any type of message.

## Multi-sig Smart Contracts

This tool is useful for Multi-Sig Smart Contracts. These smart contracts require multiple addresses to sign a transaction. Validation is usually done by signing a hash.
Read the hash with the built in QR Code Reader and sign it with this tool and receive an output QR code to send back to your online computer.

## TailsOS

When used with TailsOS, the installed browsers do not give access to the camera for security reasons. Firefox or Chromium can be installed as additional software.
Set up persistant storage, run `sudo apt update`, run `sudo apt install chromium`, and save this HTML file in the persistant file system for access at any time.
