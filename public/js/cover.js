function readFile() {
    if (this.files && this.files[0]) {
        let FR= new FileReader();
        FR.onload = function(e) {
            document.getElementById("cimgupload").src = e.target.result;
        };
        FR.readAsDataURL( this.files[0] );
    }
}
document.getElementById("cover").addEventListener("change", readFile, false);

export default readFile;