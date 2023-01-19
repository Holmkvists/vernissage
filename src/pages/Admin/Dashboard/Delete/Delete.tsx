interface IDeleteProps {
  deleteUrl: string;
}

export const Delete = (props: IDeleteProps) => {
  return (
    <form action={props.deleteUrl} method="post" encType="multipart/form-data">
      <input type="submit" value="Delete" />
    </form>
  );
};
