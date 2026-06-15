# Deployment Guide: SSH-Based Git Deployment

This guide outlines a simple, reliable, and secure CI/CD setup for deploying static websites to shared hosting (e.g., Hostinger) using GitHub Actions and SSH.

---

## 1. Prerequisites
Before setting up the workflow, ensure you have the following information and access ready:
* **Server SSH Host/IP**: (e.g. `82.25.122.249`)
* **SSH Username**: (e.g. `u121931420`)
* **SSH Password**: Your Hostinger SSH/SFTP password.
* **SSH Port**: `65002` (Hostinger's custom SSH port; standard servers default to `22`).
* **Target Directory**: The absolute or relative path to the public root folder on the server (e.g., `domains/yourdomain.com/public_html`).
* **Git Repository Visibility**: Ensure the GitHub repository is **Public**. (If private, the remote server will need GitHub SSH keys or a Personal Access Token configured to pull changes).

---

## 2. GitHub Secrets Setup
To prevent exposure of sensitive credentials, save them as Secrets in your GitHub repository:
1. Go to your repository on GitHub.
2. Navigate to **Settings** -> **Secrets and variables** -> **Actions** -> **New repository secret**.
3. Add the following secrets:
   * `FTP_SERVER` / `SSH_HOST`: The IP address or domain of your hosting server.
   * `FTP_USERNAME` / `SSH_USERNAME`: Your SSH/SFTP username.
   * `FTP_PASSWORD` / `SSH_PASSWORD`: Your SSH/SFTP password.

---

## 3. GitHub Actions Workflow Configuration
Create a file at `.github/workflows/deploy.yml` in the root of your project:

```yaml
name: Deploy Website to Server

on:
  push:
    branches:
      - main # Triggers deployment when pushing to main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: 🚀 Remote SSH Git Pull
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          port: 65002 # Hostinger custom SSH port (change to 22 for standard servers)
          script: |
            # 1. Navigate to target directory
            cd domains/yourdomain.com/public_html
            
            # 2. Automatically initialize git if it hasn't been set up yet
            if [ ! -d ".git" ]; then
              git init
              git remote add origin https://github.com/YourUsername/YourRepository.git
            fi
            
            # 3. Pull updates from GitHub
            git fetch origin main
            git reset --hard origin/main
```

---

## 4. Key Advantages of This Method
* **Speed**: Avoids checking out the codebase on the GitHub runner and transferring individual files (which can be slow, especially with FTP).
* **Reliability**: Uses `git fetch` and `git reset --hard` to synchronize the directory. This forcefully handles local untracked file conflicts and ensures the server matches the GitHub repository exactly.
* **Security**: Data is encrypted during transmission using SSH.
* **Low Overhead**: Does not require installing third-party deployment engines or configuring webhooks on the server.
