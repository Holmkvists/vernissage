export const AddProduct = () => {
  return (
    <div className="add-container">
      <form
        action="http://localhost:4000/shop/add-product"
        method="post"
        encType="multipart/form-data"
      >
        <label htmlFor="name-input">Name*</label>
        <input type="text" name="name" id="name-input" />
        <label htmlFor="img-file-input">Image file*</label>
        <input type="file" name="imgSrc" id="img-file-input" />
        <label htmlFor="price-input">Price</label>
        <input type="text" name="price" id="price-input" />
        <label htmlFor="material-input">Material</label>
        <input type="text" name="material" id="material-input" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};
