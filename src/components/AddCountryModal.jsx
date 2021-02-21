import React, { useState } from "react";
import { Modal, Button, Input, Space } from "antd";
import "./style.scss";

function AddCountryModal() {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [country, setCountry] = useState({
    name: "",
    capital: "",
    flag: "",
    region: "",
    population: "",
    position: "",
  });

  // show add modal
  const showAddModal = () => {
    setIsAddModalVisible(true);
  };

  // handle save action
  const handleAddOk = () => {
    if (
      country.name !== "" &&
      country.capital !== "" &&
      country.flag !== "" &&
      country.region !== "" &&
      country.population !== "" &&
      country.position !== ""
    ) {
      localStorage.setItem("country name", country.name);
      localStorage.setItem("country capital", country.capital);
      localStorage.setItem("country flag", country.flag);
      localStorage.setItem("country region", country.region);
      localStorage.setItem("country population", country.population);
      localStorage.setItem("country position", country.position);
      setIsAddModalVisible(false);
    }
  };

  // handle cancel action
  const handleAddCancel = () => {
    setIsAddModalVisible(false);
  };

  //onChange handler
  const onChange = (event) => {
    setCountry({ ...country, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Button type="primary" onClick={showAddModal} style={{ marginRight: 10 }}>
        Add
      </Button>
      <Modal
        title="Country Modal"
        visible={isAddModalVisible}
        okText="Save"
        onOk={handleAddOk}
        onCancel={handleAddCancel}
      >
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
      </Modal>
    </>
  );
}

export default AddCountryModal;
