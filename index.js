import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([{
    "message": "Enter the URL for which the QR Code will be created.",
    "name": "url"
}])
.then((answers) => {
    /* Saving the user's URL */
    const url = answers.url;
    console.log(`The URL your entered is ${url}`);

    /* Generating a QR Code image based of the user's URL */
    const qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    /* Generating a .txt file containing the user's URL */
    fs.writeFile('./URL.txt', url, err => {
        if (err) {
            console.error(err);
        }
    });
    console.log("QR Code generated successfully!");
})
.catch((error) => {
    console.log(error);
});