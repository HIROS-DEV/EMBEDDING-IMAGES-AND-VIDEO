import './App.css';
import SortIcon from '@mui/icons-material/Sort';
import Comments from './components/main/Comment';
import MenuIcon from '@mui/icons-material/Menu';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import ReplyIcon from '@mui/icons-material/Reply';

import Cards from './components/aside/Cards';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function App() {
	return (
		<section className='app'>
			<header>
				<div className='header__youtubeLogoContainer'>
					<MenuIcon />
					<span className='youtubeLogoContainer__playArrowSpan'>
						<PlayArrowSharpIcon className='youtubeLogoContainer__playArrow' />
					</span>
					<h1>YouTube</h1>
					<sup>JP</sup>
				</div>
				<div className='header__input'>
					<input type='text' placeholder='Search' />
					<div className='header__inputIcons'>
						<div className='input__searchSpan'>
							<SearchIcon className='input__search' />
						</div>
						<div className='input__keyboardSpan'>
							<KeyboardVoiceIcon className='input__keyboard' />
						</div>
					</div>
				</div>
				<div>
					<ul className='header__icons'>
						<li>
							<VideoCallOutlinedIcon />
						</li>
						<li>
							<AppsIcon />
						</li>
						<li>
							<NotificationsOutlinedIcon />
						</li>
						<li>
							<img
								src='https://yt3.ggpht.com/yti/APfAmoETyVL1rsDwMD-MU0BZSlsXmLG0h-Gso4ecPxLi=s48-c-k-c0x00ffffff-no-rj'
								alt='userIcon'
								className='usericon header'
							></img>
						</li>
					</ul>
				</div>
			</header>

			<main>
				<div className='main__right'>
					<section className='main__movieContainer'>
						<iframe
							width='100%'
							height='500'
							src='https://www.youtube.com/embed/V74l_zS1x8E'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</section>

					<section className='main__commentsSection'>
						<div>
							<h1>
								Contributing to Open Source Part I: The Easy
								Way
							</h1>
						</div>
						<div className='main__movieTitleContainer'>
							<h3>64,921 views・Feb 28, 2014</h3>
							<div className='main__icons'>
								<ThumbUpAltOutlinedIcon
									style={{
										width: '20px',
										height: '20px',
										alignSelf: 'center',
									}}
								/>
								<div className='icons__text'>471</div>
								<ThumbDownAltOutlinedIcon
									style={{
										width: '20px',
										height: '20px',
									}}
								/>
								<div className='icons__text'>DISLIKE</div>

								<ReplyIcon
									style={{
										width: '20px',
										height: '20px',
										transform: 'rotateY(180deg)',
									}}
								/>
								<div className='icons__text'>SHARE</div>

								<PlaylistAddOutlinedIcon
									style={{
										width: '20px',
										height: '20px',
									}}
								/>
								<div className='icons__text'>SAVE</div>

								<MoreHorizIcon
									style={{
										width: '20px',
										height: '20px',
									}}
								/>
							</div>
						</div>

						<div className='main__userInfoSection'>
							<div className='userInfoSection__title'>
								<div className='userInfoSection__userInfo'>
									<img
										src='https://yt3.ggpht.com/ytc/AKedOLQWQsZo8xQGCXc6BgOVTPy2tQD7n9JjHat05g=s48-c-k-c0x00ffffff-no-rj'
										alt='userIcon'
										className='usericon userInfo'
									/>
									<div className='userInfoSection__userName'>
										<h3>The Odin Project</h3>
										<h4>1.07K subscribers</h4>
									</div>
								</div>
								<div>
									<button className='userInfoSection__subscribe'>
										SUBSCRIBE
									</button>
								</div>
							</div>
							<div className='userInfoSection__text'>
								<h3>
									How do you contribute to open source? In
									this video, I'll describe the easiest way
									to make a simple contribution to an open
									source project -- without using the
									command line, a text editor, "forking a
									repo", or even touching Git outside of
									Github. I'll also describe what kinds of
									contributions open{' '}
								</h3>
							</div>
							<h4 className='userInfoSection__showmore'>
								SHOW MORE
							</h4>
						</div>

						<div className='main__commentsContainer'>
							<div className='commentsContainer__div'>
								<p>18 Comments</p>
								<SortIcon />
								<h3 className='commentsContainer__sort'>
									SORT BY
								</h3>
							</div>

							<div className='comments__userContainer'>
								<img
									src='https://yt3.ggpht.com/yti/APfAmoETyVL1rsDwMD-MU0BZSlsXmLG0h-Gso4ecPxLi=s48-c-k-c0x00ffffff-no-rj'
									alt='userIcon'
									className='usericon commentUser'
								/>
								<input
									type='text'
									placeholder="Commenting publicly as Hiro's DEV"
								/>
							</div>

							<Comments />
							<Comments />
						</div>
					</section>
				</div>
				<aside>
					<ul className='aside__top'>
						<li>All</li>
						<li>Git</li>
						<li>Related</li>
					</ul>
					<Cards />
				</aside>
			</main>
		</section>
	);
}

export default App;
