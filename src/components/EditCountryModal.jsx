import React, { useState } from "react";
import { Modal, Button, Input, Space, Typography } from "antd";
import "./style.scss";

const { Text } = Typography;

function EditCountryModal() {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [country, setCountry] = useState({
    name: "",
    capital: "",
    flag: "",
    region: "",
    population: "",
    position: "",
  });

  // show edit modal
  const showEditModal = () => {
    setCountry({
      name: localStorage.getItem("country name"),
      capital: localStorage.getItem("country capital"),
      flag: localStorage.getItem("country flag"),
      region: localStorage.getItem("country region"),
      population: localStorage.getItem("country population"),
      position: localStorage.getItem("country position"),
    });
    setIsEditModalVisible(true);
  };

  // handle edit action
  const handleEditOk = () => {
    if (localStorage.getItem("country name")) {
      localStorage.setItem("country name", country.name);
      localStorage.setItem("country capital", country.capital);
      localStorage.setItem("country flag", country.flag);
      localStorage.setItem("country region", country.region);
      localStorage.setItem("country population", country.population);
      localStorage.setItem("country position", country.position);
      setIsEditModalVisible(false);
    }
  };

  // handle cancel action
  const handleEditCancel = () => {
    setIsEditModalVisible(false);
  };

  //onChange handler
  const onChange = (event) => {
    setCountry({ ...country, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Button type="primary" onClick={showEditModal}>
        Edit
      </Button>
      <Modal
        title="Edit Country Modal"
        visible={isEditModalVisible}
        okText="Save"
        onOk={handleEditOk}
        onCancel={handleEditCancel}
      >
        {localStorage.getItem("country name") ? (
          <Space direction="vertical" style={{ width: "100%" }}>
            <Input
              placeholder="Country name"
              name="name"
              value={country.name}
              onChange={onChange}
            />
            <Input
              placeholder="capital"
              name="capital"
              value={country.capital}
              onChange={onChange}
            />
            <Input
              placeholder="Country flag"
              name="flag"
              value={country.flag}
              onChange={onChange}
            />
            <Input
              placeholder="Region"
              name="region"
              value={country.region}
              onChange={onChange}
            />
            <Input
              placeholder="Population"
              name="population"
              value={country.population}
              onChange={onChange}
            />
            <Input
              placeholder="Country Position"
              name="position"
              value={country.position}
              onChange={onChange}
            />
          </Space>
        ) : (
          <Text>There is no country stored in localStorage</Text>
        )}
      </Modal>
    </>
  );
}

export default EditCountryModal;
