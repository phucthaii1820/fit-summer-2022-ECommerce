import { Menu, Dropdown, Row, Col } from "antd";
import { Link } from "react-router-dom";

const DropDownMenu = ({ categories }) => {
    const menu = (
        <Menu
            style={{
                marginTop: "20px"
            }}
        >
            <Row>
                {categories.map((item, index) => (
                    <Col xl={6} md={6} key={index}>
                        <Menu.Item>
                            <Link to={"/category/" + item?._id} className="text-center">
                                <div className="text-center">{item?.name}</div>
                            </Link>
                        </Menu.Item>
                    </Col>
                ))}
            </Row>
        </Menu>
    );
    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                Category
            </a>
        </Dropdown>
    );
}

export default DropDownMenu