import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col, Divider, Input, Button } from 'antd';
import { InstagramOutlined, FacebookOutlined, YoutubeOutlined, MailOutlined, SendOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FormattedMessage } from 'react-intl';

const { Footer } = Layout;

class HomeFooter extends Component {
    render() {
        return (
            <div className="home-footer">
                <p>
                    &copy;2025 Nguyễn Minh Nhựt - Niên luận cơ sở. <a href="#">More information</a>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
