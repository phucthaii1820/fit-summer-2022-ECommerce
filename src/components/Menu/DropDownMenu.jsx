import { Menu, Dropdown, Row, Col } from "antd";
import { Link } from "react-router-dom";

const DropDownMenu = ({ categories }) => {
    const menu = (
        <div className="mt-2">
            <Menu>
                <Row gutter={[16, 16]} style={{ margin: 1 }}>
                    {categories.map((item, index) => (
                        <Col xl={8} md={8} key={index}>
                            <Menu.Item style={{
                                backgroundColor: "#ffffff",
                            }}>
                                <Link to={"/category/" + item?._id}>
                                    <div className="text-center text-base">{item?.name}</div>
                                </Link>
                            </Menu.Item>
                        </Col>
                    ))}
                </Row>
            </Menu>
        </div>
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