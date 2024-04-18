// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {result, matchStatus, competingTeam, competingTeamLogo} = matchData
  const classNames = matchStatus === 'Won' ? 'match-won' : 'match-lost'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={classNames}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
