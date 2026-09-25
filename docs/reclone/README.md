# Reprendre le projet après un reclone

Le dossier local `Desktop\Projets\MRsante` a été supprimé le 2026-09-25 pour libérer de l'espace disque.
Tout le code et les fichiers locaux utiles ont été poussés sur GitHub avant la suppression.

## 1. Cloner

```bash
git clone https://github.com/Mohamedsoueidahmed/MRsante.git
cd MRsante
git fetch --all --tags
```

## 2. Branches

| Branche | Rôle |
|---------|------|
| `main` | Branche unique |

## 3. Fichiers normalement ignorés, sauvegardés dans le repo

Rien (aucun fichier ignoré en local).

Non sauvegardés (se recréent) : `node_modules/` → `npm install` ; `dist/` → `npm run build`.

## 4. Installation

```bash
npm install
npm run dev
```
Configuration Supabase / Firebase : `config/`.