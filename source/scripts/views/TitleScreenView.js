var Link = ReactRouter.Link

var TitleScreenView = React.createClass({
    render: function() {
        return (
            <div className="title-screen view">
                <header>
                    <h1>whoami?</h1>
                    <h2>a game of utter confusion</h2>
                </header>
                <menu>
                    <Link to="game-type">
                        Play!! :D
                    </Link>
                </menu>
                <aside>
                    1.9!
                </aside>
                <img src="./assets/images/player.pose.png"/>
            </div>
        )
    }
})

module.exports = TitleScreenView
