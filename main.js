const linksSocialMidia = {
  github: 'lygiabrito',
  youtube: 'rocketseat',
  facebook: 'lygiabrito',
  instagram: 'lygia.brito',
  twitter: 'LygiaBrito1'
}

function changeLinksSocialMedia() {
  userName.textContent = 'Lygia Brito'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMidia[social]}`
  }
}

changeLinksSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMidia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
