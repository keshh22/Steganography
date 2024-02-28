#  LSB Image Steganography

## Overview
This project focuses on implementing Least Significant Bit (LSB) image steganography. Steganography is the art of hiding information within other data (in this case, images) without arousing suspicion. The LSB technique allows us to embed sensitive information within image files in a way that is not detectable by the human eye.

## How It Works
### Encoding:
We start with an image (the “cover image”) and a message we want to hide.
For each pixel in the cover image, we modify the least significant bit (LSB) of its color value to encode a bit of our message.
Since the LSB change is minimal, the visual impact on the image is negligible.
Repeat this process for all pixels in the image to embed the entire message.
### Decoding:
To extract the hidden message, we reverse the process.
We read the LSB of each pixel in the stego image (the modified cover image).
Assemble the bits to reconstruct the original message.
Features
### Robustness: LSB steganography provides a robust way to hide information.
### Imperceptibility: The changes are subtle and not noticeable to the human eye.
### Security: The hidden message remains confidential within the image.

## Usage
### Encode:
Provide the cover image and the message you want to hide.
Run the encoding process to create the stego image.
### Decode:
Use the stego image.
Run the decoding process to extract the hidden message.

## Example
Suppose we have an image of a serene landscape. By embedding a secret message using LSB steganography, we can share the image innocuously while ensuring the confidentiality of our communication.

Feel free to explore the code and experiment with different images and messages!
