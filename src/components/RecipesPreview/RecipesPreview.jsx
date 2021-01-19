import React from "react";
import RecipesPreview from "./styled"
export default function RecipesPreviewComponent() {
  return (
    <RecipesPreview.Wrapper>
      <RecipesPreview.RecipesImg src="http://via.placeholder.com/280x209" alt="" />
      <RecipesPreview.Information>
        <RecipesPreview.Name>Cake</RecipesPreview.Name>
        <RecipesPreview.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          repellat ratione suscipit reprehenderit voluptate eius quaerat
          perspiciatis iste error nisi!
        </RecipesPreview.Description>
      </RecipesPreview.Information>
      <RecipesPreview.AuthorWrapper>
        <RecipesPreview.AuthorImg
          src="http://via.placeholder.com/35x35"
          alt=""
        />
        <RecipesPreview.AuthorInformation>
          <RecipesPreview.AuthorName>Nikita</RecipesPreview.AuthorName>
          <RecipesPreview.AuthorDate>15 january 2021</RecipesPreview.AuthorDate>
        </RecipesPreview.AuthorInformation>
      </RecipesPreview.AuthorWrapper>
    </RecipesPreview.Wrapper>
  );
}
