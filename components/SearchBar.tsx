/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

import { searchBar as contents } from "../constants/home";

const SearchBar: React.FunctionComponent = () => {
  const [platform, setPlatform] = useState<string>("naver");

  const PlatformBtn = ({ id, children }) => (
    <p
      className={`cursor-pointer ${
        id === platform ? "font-black" : "font-gray"
      }`}
      onClick={() => setPlatform(id)}
    >
      {children}
    </p>
  );

  const onSearch = ({ keyword }) => {
    window.location.href = contents[platform] + keyword;
  };

  return (
    <React.Fragment>
      <div className="flex">
        <PlatformBtn id="naver">네이버</PlatformBtn>
        <PlatformBtn id="google">구글</PlatformBtn>
      </div>

      <Formik
        initialValues={{
          keyword: "",
        }}
        onSubmit={onSearch}
      >
        {() => (
          <Form>
            <Field type="text" name="keyword" />
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default SearchBar;
