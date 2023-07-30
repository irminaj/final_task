import React from "react";
import { UpdateForm } from "../../features/updateForm/UpdateForm";
import { EditPageStyle, EditPageHeadingStyle } from "./EditPage.style";

export const EditPage = () => {
  return (
    <EditPageStyle>
      <EditPageHeadingStyle>Edit Form</EditPageHeadingStyle>
      <UpdateForm />
    </EditPageStyle>
  );
};
