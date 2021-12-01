import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

const Comment = () => {
	return (
		<div className='comments__commenterContainer'>
			<img
				src='https://yt3.ggpht.com/ytc/AKedOLTymgscY08iK139FUNArUwQAuMIFHchhYQpew=s48-c-k-c0x00ffffff-no-rj'
				alt='usericon'
				className='usericon commentUser'
			/>
			<div className='commenterContainer__commentsContainer'>
				<h3>
					1newbbie{' '}
					<span className='commentsContainer__span'>
						{' '}
						3 years ago (edited)
					</span>
				</h3>
				<h3>
					A remark to what happening at 04:12 is: after
					clicking "Propose file change", it now goes to
					commit page instead of the pull request screen as
					shown on the video. One need to click the commit
					name (e.g. patch-1 if it is the first commit of
					your branch) near the top of the screen to go to
					the pull request screen.
				</h3>
				<div className='commentsContainer__icons'>
					<div>
						<ThumbUpAltOutlinedIcon
							style={{
								width: '15px',
								height: '15px',
							}}
						/>
					</div>
					<div>
						<ThumbDownAltOutlinedIcon
							style={{
								width: '15px',
								height: '15px',
							}}
						/>
					</div>
					<div className='commentsContainer__ReplyContainer'>
						<h3 className='commentsContainer__reply'>
							REPLY
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Comment;
