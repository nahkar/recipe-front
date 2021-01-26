import React from "react";
import img from "./img/processed.jpeg";
import Header from "./styled"

export default function HeaderComponent() {
  return (
    <Header.Wrapper>
      <Header.LogoAndBtn>
        <Header.Logo src={img} alt="#" width="195px" />
        <Header.BtnWrapper>
          <Header.BtnRegistration>registration</Header.BtnRegistration>
          <Header.BtnLogin>login</Header.BtnLogin>
        </Header.BtnWrapper>
      </Header.LogoAndBtn>
      <Header.Hr />
      <Header.Navigation>
        <Header.RecipesLink
          to="/recipes"
        >
          recipes
        </Header.RecipesLink>
        <Header.BasicLink to="/tv_show" >
          tv show
        </Header.BasicLink>
        <Header.BasicLink to="/new_year">
          new year
        </Header.BasicLink>
        <Header.BasicLink
          to="/cooking_school"
          
        >
          cooking school
        </Header.BasicLink>
        <Header.BasicLink to="/shop">
          shop
        </Header.BasicLink>
        <Header.BasicLink to="/articles">
          articles
        </Header.BasicLink>
        <Header.BasicLink to="/contests">
          contests
        </Header.BasicLink>
        <Header.BasicLink to="/club">
          club
        </Header.BasicLink>
        <Header.BasicLink to="/more">
          more
        </Header.BasicLink>
      </Header.Navigation>
    </Header.Wrapper>
  );
}
