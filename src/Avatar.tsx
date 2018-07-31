import * as React from 'react';
import {recognize} from './tesseract';
import {Icon, message, Upload} from 'antd';
import './avatar.css'

function getBase64(img: any, callback: Function) {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));
	reader.readAsDataURL(img);
}

export default class Avatar extends React.Component<any, any> {
	state = {
		loading: false,
	};

	handleChange = (info: any) => {
		if (info.file.status === 'uploading') {
			this.setState({loading: true});
			return;
		}
		if (info.file.status === 'done') {
			// Get this url from response in real world.
			getBase64(info.file.originFileObj, (imageUrl: any) => this.setState({
				imageUrl: imageUrl,
				loading: false,
			}));
		}
	};

	upload = () => {
		return new Promise((resolve, reject) => {
		})
	};

	beforeUpload = (file: File) => {
		recognize(file);
		const isJPG = file.type === 'image/jpeg';
		if (!isJPG) {
			message.error('You can only upload JPG file!');
		}
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			message.error('Image must smaller than 2MB!');
		}

		getBase64(file, (imageUrl: any) => this.setState({
			imageUrl: imageUrl,
			loading: false,
		}));

		// return isJPG && isLt2M;
		return false
	};

	render() {
		const uploadButton = (
			<div>
				<Icon type={this.state.loading ? 'loading' : 'plus'}/>
				<div className="ant-upload-text">Upload</div>
			</div>
		);
		const imageUrl = (this.state as any).imageUrl;
		return (
			<Upload
				name="avatar"
				listType="picture-card"
				className="avatar-uploader"
				showUploadList={false}
				action={this.upload}
				beforeUpload={this.beforeUpload}
				onChange={this.handleChange}
			>
				{imageUrl ? <img src={imageUrl} alt="avatar"/> : uploadButton}
			</Upload>
		);
	}
}

