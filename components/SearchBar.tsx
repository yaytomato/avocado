/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

import { searchBar as contents } from "../constants/home";

const SearchBar: React.FunctionComponent = () => {
  const [platform, setPlatform] = useState<string>("naver");

  const PlatformBtn = ({ id, children, className = "" }) => (
    <p
      className={`cursor-pointer ${className} ${
        id === platform ? "text-black font-extrabold" : "text-gray-500"
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
    <div className="mt-5 w-126 mx-auto">
      <div className="flex">
        <PlatformBtn id="naver">네이버</PlatformBtn>
        <PlatformBtn id="google" className="ml-4">
          구글
        </PlatformBtn>
      </div>

      <Formik
        initialValues={{
          keyword: "",
        }}
        onSubmit={onSearch}
      >
        {() => (
          <Form>
            <Field type="text" name="keyword" className="search-bar" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBar;
