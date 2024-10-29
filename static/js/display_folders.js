function displayFolderInfo() {
    // Get source and destination folder inputs
    const srcFolderInput = document.getElementById('srcFolderInput');
    const dstFolderInput = document.getElementById('dstFolderInput');

    // Get source folder path
    const srcFolderFiles = Array.from(srcFolderInput.files);
    const dstFolderFiles = Array.from(dstFolderInput.files);

    const srcFolderPath = srcFolderFiles.length > 0 ? srcFolderFiles[0].webkitRelativePath.split('/')[0] : null;
    const dstFolderPath = dstFolderFiles.length > 0 ? dstFolderFiles[0].webkitRelativePath.split('/')[0] : null;

    // Store full paths in hidden inputs
    document.getElementById('srcFullPath').value = srcFolderFiles.length > 0 ? srcFolderFiles[0].webkitRelativePath.split('/')[0] : '';
    document.getElementById('dstFullPath').value = dstFolderFiles.length > 0 ? dstFolderFiles[0].webkitRelativePath.split('/')[0] : '';

    // Select message containers
    const srcFolderMessage = document.getElementById('srcFolderMessage');
    const dstFolderMessage = document.getElementById('dstFolderMessage');

    // Logic to display messages based on folder conditions
    if (srcFolderPath && dstFolderPath && srcFolderPath !== dstFolderPath) {
        srcFolderMessage.innerHTML = `Source Folder: <b>${srcFolderPath}</b>`;
        dstFolderMessage.innerHTML = `Destination Folder: <b>${dstFolderPath}</b>`;
        console.warn(
            `Source Folder: '${srcFolderPath}'\nDestination Folder: '${dstFolderPath}'`
        );
    } else if (srcFolderPath === dstFolderPath) {
        srcFolderMessage.innerHTML = `Source Folder: <b>${srcFolderPath}</b>`;
        dstFolderMessage.innerHTML = `Destination Folder: <b>${dstFolderPath}</b><br>(Same as Source Folder - files may be overwritten)`;
        console.warn(
            `The Source and Destination Folders are the same. Files may be overwritten in '${srcFolderPath}'.`
        );
    } else if (srcFolderPath && !dstFolderPath) {
        srcFolderMessage.innerHTML = `Source Folder: <b>${srcFolderPath}</b>`;
        dstFolderMessage.innerHTML = `No destination folder specified. Files will be saved in the Source Folder.`;
        console.warn(
            `Source Folder: '${srcFolderPath}'\nNo destination folder specified.`
        );
    } else {
        srcFolderMessage.innerHTML = "";
        dstFolderMessage.innerHTML = "";
    }
}
