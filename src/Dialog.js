import styled from 'styled-components'


export const Button = styled.button`
	background: $color--primary;
	border: 0;
	outline: 0;	
	font-weight: bold;
	text-transform: uppercase;
	text-decoration: none;
	letter-spacing: 1px;
	color: white;
	cursor: pointer;
	position: relative;
  	padding: 15px 30px;
  	border-radius: 5px;
  	font-size: 1.6rem

	&:hover {
		background: #FBB345;
	}
		
	&:active {
		background: #3CBC45;
	}

`

const Dialog = styled.div`


.button

.button--small
  display flex
  justify-content center
  align-items center
  min-width 70px
  padding 5px 10px
  border-radius 0 5px 5px 0
  font-size 14px
    
.button--large
  position relative
  padding 15px 30px
  border-radius 5px
  font-size 16px

  &:active
    top 1px

.content
  text-align center
  max-width 350px

.email
  position relative

.overlay
  position fixed
  z-index -1
  background rgba($color--black, 50%)
  top 0
  left 0
  width 100%
  height 100%
  opacity 0
  will-change opacity
    
  .email--is-active &
    opacity 1
    z-index 1
    transition opacity 0.2s

.dialog
  position absolute
  z-index 2
  top 0
  display flex
  flex-direction column
  width 100%
  box-shadow 0 48px 80px -32px rgba(0, 0, 0, 0.3)
  text-align left
  transform translateY(-100%) scale(0)
  transform-origin bottom
  opacity 0

  .email--is-active &
    transform translateY(-100%) scale(1)
    opacity 1
    transition transform 0.2s, opacity 0.2s
    
  &:after
    content ''
    position absolute
    left 50%
    bottom 0
    width 20px
    height 20px
    background $color--white
    border-radius 0 0 5px 0
    transform translate(-50%, 50%) rotate(45deg)
    transform-origin center
    
.dialog__top
  padding 30px
  background shade($color--white, 5%)
  border-radius 5px 5px 0 0

.dialog__bottom
  padding 30px
  background $color--white
  border-radius 0 0 5px 5px

.control
  display flex
  
.input
  font-family 'Source Sans Pro', sans-serif
  width 100%
  height 43px
  padding 8px 10px
  border-radius 5px 0 0 5px
  border 1px solid shade($color--white, 20%)
  border-right 0
  background $color--white
  font-size 18px
  
.label
  display block
  font-size 14px
  font-weight bold
  text-transform uppercase
  margin-bottom 10px
  margin-left 3px

`

export default Dialog