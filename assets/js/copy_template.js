function copySectionContents() {
    // Get the first section element on the page
    // Fetch the content of the local file (index.md)
    fetch('index.md')
        .then(response => response.text())
        .then(content => {
            // Remove blockquotes from the content
            const contentWithoutBlockquotes = content.replace(/^>.*$/gm, '');


            // Copy the rendered HTML content to the clipboard
            navigator.clipboard.writeText(contentWithoutBlockquotes)
                .then(() => {
                    // Success callback
                    // alert('Rendered HTML copied to clipboard!');
                })
                .catch(error => {
                    // Error callback
                    console.error('Error copying to clipboard:', error);
                    alert('Error copying to clipboard. Please check the console for details.');
                });
        })
        .catch(error => {
            console.error('Error fetching file:', error);
            alert('Error fetching file. Please check the console for details.');
        });
}