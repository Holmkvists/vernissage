import { BackButton } from "../../../../../components/BackButton/BackButton";

interface IAddItem {
  type: string | undefined;
}

export const AddItem = (props: IAddItem) => {
  console.log(props.type);

  return (
    <>
      <BackButton />
      <div className="add-container">
        <p>* = Required</p>
        {props.type === "art" ? (
          <>
            <form
              action="http://localhost:4000/art/add-art"
              method="post"
              encType="multipart/form-data"
            >
              <label htmlFor="name-input">Name*</label>
              <input type="text" name="name" id="name-input" required />
              <label htmlFor="img-file-input">Image file*</label>
              <input type="file" name="imgSrc" id="img-file-input" required />
              <label htmlFor="alt-name-input">Alternate name</label>
              <input type="text" name="altName" id="alt-name-input" />
              <label htmlFor="alt-img-file-input">Alternate image file</label>
              <input type="file" name="altImgSrc" id="alt-img-file-input" />
              <input type="submit" value="Add" />
            </form>
          </>
        ) : (
          <>
            <form
              action="http://localhost:4000/shop/add-product"
              method="post"
              encType="multipart/form-data"
            >
              <label htmlFor="name-input">Name*</label>
              <input type="text" name="name" id="name-input" required />
              <label htmlFor="img-file-input">Image file*</label>
              <input type="file" name="imgSrc" id="img-file-input" required />
              <label htmlFor="price-input">Price*</label>
              <input type="text" name="price" id="price-input" required />
              <label htmlFor="material-input">Material*</label>
              <input type="text" name="material" id="material-input" required />
              <input type="submit" value="Add" />
            </form>
          </>
        )}
      </div>
    </>
  );
};
