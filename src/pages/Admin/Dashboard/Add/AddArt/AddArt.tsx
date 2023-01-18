export const AddArt = () => {
  return (
    <div className="add-container">
      <form
        action="http://localhost:4000/add-art"
        method="post"
        encType="multipart/form-data"
      >
        <label htmlFor="name-input">Name*</label>
        <input type="text" name="name" id="name-input" />
        <label htmlFor="img-file-input">Image file*</label>
        <input type="file" name="imgSrc" id="img-file-input" />
        <label htmlFor="alt-name-input">Alternate name</label>
        <input type="text" name="altName" id="alt-name-input" />
        <label htmlFor="alt-img-file-input">Alternate image file</label>
        <input type="file" name="altImgSrc" id="alt-img-file-input" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};
