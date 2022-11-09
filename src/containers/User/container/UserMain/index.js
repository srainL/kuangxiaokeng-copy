import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import OrderItem from '../../components/OrderItem'
import './style.css'
import {
    actions as userActions,
    getDeletingOrderId,
    getCommentingOrderId,
    getCurrentOrderComment,
    getCurrmentOrderStars,
    getCommentTip
} from '../../../../redux/modules/user'
import Confirm from '../../../../components/Confirm'

const tabTitles = ['全部订单', '待付款', '可使用', '退款/售后']

class UserMain extends Component {
    render() {
        const { data, currentTab, deletingId } = this.props
        return (
            <div className="userMain">
                <div className="userMain__menu">
                    {tabTitles.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="userMain__tab"
                                onClick={this.handleClickTab.bind(this, index)}
                            >
                                <span
                                    className={
                                        currentTab === index
                                            ? 'userMain__title userMain__title--active'
                                            : 'userMain__title'
                                    }
                                >
                                    {item}
                                </span>
                            </div>
                        )
                    })}
                </div>
                <div className="userMain__content">
                    {data && data.length > 0
                        ? this.renderOrderList(data)
                        : this.renderEmpty()}
                </div>
                {/* 点击删除触发 deletingOrderId 更新， 渲染删除确认框页面 */}
                {deletingId ? this.renderConfirmDialog() : null}
            </div>
        )
    }

    // 渲染订单列表 ( 从 redux 中拿到所有订单数据)
    renderOrderList = data => {
        const { commentingOrderId, orderComment, orderStars, commentTip } = this.props
        return data.map(item => {
            return (
                <OrderItem
                    key={item.id}
                    data={item}
                    commentTip={commentTip}
                    isCommenting={item.id === commentingOrderId}
                    comment={item.id === commentingOrderId ? orderComment : ''}
                    stars={item.id === commentingOrderId ? orderStars : 0}
                    onCommentChange={this.handleCommentChange}
                    onStarsChange={this.handleStarsChange}
                    onComment={this.handleComment.bind(this, item.id)}
                    onRemove={this.handleRemove.bind(this, item.id)}
                    onSubmitComment={this.handleSubmitComment}
                    onCancelComment={this.handleCancelComment}
                    onHideCommentTip={this.handleHideCommentTip}
                />
            )
        })
    }

    // 渲染删除确认框
    renderConfirmDialog = () => {
        const { removeOrder, hideDeleteDialog } = this.props.userActions
        return (
            <Confirm
                content="确认删除该订单吗?"
                cancelText="取消"
                confirmText="确定"
                onCancel={hideDeleteDialog}
                onConfirm={removeOrder}
            />
        )
    }

    renderEmpty = () => {
        return (
            <div className="userMain__empty">
                <div className="userMain__emptyIcon" />
                <div className="userMain__emptyText1">您还没有相关订单</div>
                <div className="userMain__emptyText2">去逛逛看有哪些想买的</div>
            </div>
        )
    }

    // 选中当前订单进行评价，使订单处于评价状态
    handleComment = orderId => {
        const { showCommentArea } = this.props.userActions
        showCommentArea(orderId)
    }

    // 监听评论内容的改变，更新state
    handleCommentChange = comment => {
        const { setCommentContent } = this.props.userActions
        setCommentContent(comment)
    }

    // 监听评分的改变，更新state
    handleStarsChange = stars => {
        const { setStars } = this.props.userActions
        setStars(stars)
    }

    // 提交评论
    handleSubmitComment = () => {
        // 1. 将数据保存到Redux中 2. 显示提交成功对话框
        const { submitComment, showCommentTip } = this.props.userActions
        submitComment()
        showCommentTip()
    }

    // 取消评论状态(隐藏评论界面)
    handleCancelComment = () => {
        const { hideCommentArea } = this.props.userActions
        hideCommentArea()
    }

    // 隐藏提交成功对话框
    handleHideCommentTip = () => {
        this.props.userActions.hideCommentTip()
    }

    handleRemove = id => {
        this.props.userActions.showDeleteDialog(id)
    }

    // 处理tab切换
    handleClickTab = index => {
        this.props.onClickTab(index)
    }
}

const mapStateToProps = (state, props) => {
    return {
        deletingId: getDeletingOrderId(state),
        commentingOrderId: getCommentingOrderId(state),
        orderComment: getCurrentOrderComment(state),
        orderStars: getCurrmentOrderStars(state),
        commentTip: getCommentTip(state)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserMain)
