==> Hay que poner todos estos Script en el html:

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="https://cdn.rawgit.com/cloudinary/cloudinary_js/master/js/jquery.ui.widget.js"></script>
<script src="https://rawgit.com/cloudinary/cloudinary_js/master/js/jquery.iframe-transport.js"></script>
<script src="https://rawgit.com/cloudinary/cloudinary_js/master/js/jquery.fileupload.js"></script>
<script src="https://rawgit.com/cloudinary/cloudinary_js/master/js/jquery.cloudinary.js"></script>

==> El input tiene que ser asi :

<input required class="cloudinary-fileupload" value="Upload file" data-url="https://api.cloudinary.com/v1_1/app-correos-costarica/auto/upload" type="file" name="file">


==> Esto va en el controlador :

const imageCloudName = 'app-correos-costarica';
const unsignedUser = 'pgl2jn3n';

$.cloudinary.unsigned_upload_tag(unsignedUser, { cloud_name: imageCloudName });

$("input.cloudinary-fileupload[type=file]").unsigned_cloudinary_upload(unsignedUser, { cloud_name: imageCloudName, tags: 'browser_uploads' })
  .bind('cloudinarydone', function(e, data) {
    imagePreview.setAttribute("src", data.result.url);
    imagePreview.style.display = 'block';
    urlFotoPerfil = data.result.url;
});