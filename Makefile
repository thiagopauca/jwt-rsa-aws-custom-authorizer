# Act is a mandatory dependency for this task. To install it refers to https://github.com/nektos/act
# Create your own env file with the env variables (PROJECT, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
github-action-pull-request:
	act -j pr-check --secret-file ./env/.gh-actions-secrets.env