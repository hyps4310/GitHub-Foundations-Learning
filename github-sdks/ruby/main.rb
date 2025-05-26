require 'octokit'

client = Octokit::Client.new(access_token: ENV['GH_TOKEN'])

# Create the new branch
client.create_ref(
    "hyps4310/GitHub-Foundations-Learning",
    "heads/sdks",
    "9f9080a82f310b623e9f9b53067c15386ea9af79"
)