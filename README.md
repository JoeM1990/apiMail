# Service de messagerie avec NestJS et Nodemailer

Ce projet montre comment envoyer des e-mails à l'aide de [NestJS](https://nestjs.com/) et [Nodemailer](https://nodemailer.com/) avec Gmail comme fournisseur de services de messagerie.

## Caractéristiques

- Envoyez des e-mails à un ou plusieurs destinataires.
- Personnalisez le nom de l'expéditeur.
- Facilement extensible pour différents fournisseurs de services de messagerie.

## Prérequis

Avant d'exécuter ce projet, assurez-vous que les éléments suivants sont installés :

- [Node.js](https://nodejs.org/) (v14.x ou version ultérieure)
- [Nest CLI](https://docs.nestjs.com/cli/overview) (v7.x ou version ultérieure)
- Un compte Gmail avec [Mots de passe d'application](https://support.google.com/accounts/answer/185833) activé pour votre compte.

## Commencer

### Installation

1. Clonez le référentiel :

   ```bash
   clone git https://github.com/JoeM1990/apiMail.git
   cd apiMail

2. Installez les dépendances :
   npm install

3. Configuration
    Configurez vos identifiants Gmail :

    Créez un mot de passe d'application dans votre compte Google.
    Remplacez your-email@gmail.com et your-app-password dans EmailService par vos informations d'identification réelles.

  ```bash
  this.transporter = nodemailer.createTransport({
    service : 'gmail',
    authentification : {
      utilisateur : 'votre-email@gmail.com',
      pass : « votre-mot de passe-de-l'application »,
    },
  });
  

### Usage

Pour envoyer un e-mail, vous pouvez effectuer une requête POST à ​​http://localhost:3000/email/send avec le corps JSON suivant :

  Exemple pour un seul destinataire :

    ```bash
    {
      "to": "destinataire@exemple.com",
      "subject": "E-mail de test",
      "text": "Ceci est un e-mail test de NestJS !",
      "fromName": "Mon expéditeur personnalisé"
    }

  Exemple pour plusieurs destinataires :
  ```bash
  {
    "to": "utilisateur1@exemple.com,utilisateur2@exemple.com",
    "subject": "E-mail de test",
    "text": "Ceci est un email test envoyé à plusieurs destinataires !",
    "fromName": "Mon expéditeur personnalisé"
  }

 ou

  {
    "à": ["utilisateur1@exemple.com", "utilisateur2@exemple.com", "utilisateur3@exemple.com"],
    "subject": "E-mail de test",
    "text": "Ceci est un email test envoyé à plusieurs destinataires !",
    "fromName": "Mon expéditeur personnalisé"
  }