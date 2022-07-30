import { Menu, Dropdown, Row, Col } from "antd";
import { Link } from "react-router-dom";

const DropDownMenu = ({ categories }) => {
    const menu = (
        <div className="mt-2">
            <Menu style={{ width: "150px"}}>
                <Row gutter={[2, 2]}>
                    {categories.map((item, index) => (
                        <Col span={24} key={index}>
                            <Menu.Item style={{
                                backgroundColor: "#ffffff",
                            }}>
                                <Link to={"/category/" + item?._id}>
                                    <div className="text-base">{item?.name}</div>
                                </Link>
                            </Menu.Item>
                        </Col>
                    ))}
                </Row>
            </Menu>
        </div>
    );
    return (
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                Danh mục
            </a>
        </Dropdown>
    );
}

export default DropDownMenu;
