import { Breadcrumb } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";
const index = () => {
	return (
		<div className="main">
			<div className="bread my-4">
				<Breadcrumb
					items={[
						{
							title: (
								<Link to="/dashboard" className="text-[#000]  ">
									Bosh sahifa
								</Link>
							),
						},
						{
							title: (
								<Link to="/dashboard/sozlamalar" className="text-[#000] ">
									Sozlamalar
								</Link>
							),
						},
					]}
				/>
			</div>

			<div className="form">
				<Form
					name="basic"
					style={{
						maxWidth: "100%",
					}}
					initialValues={{
						remember: true,
					}}
					autoComplete="off"
				>
					<Form.Item
						label="Familya.I.SH"
						name="FISH"
						rules={[
							{
								required: true,
								message: "Iltimos username kiriting!",
							},
						]}
					>
						<Input placeholder="F.I.SH ..." />
					</Form.Item>

					<Form.Item
						label="Username"
						name="username"
						rules={[
							{
								required: true,
								message: "Iltimos username kiriting!",
							},
						]}
					>
						<Input placeholder="username..." />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: "Iltimos parolni kiriting!",
							},
						]}
					>
						<Input.Password placeholder="Parol..." type="text" />
					</Form.Item>
					<Form.Item>
						<Button type="danger" className=" bg-blue-500" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default index;
<h1>hello</h1>;
