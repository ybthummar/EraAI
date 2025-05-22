#!/bin/bash
uvicorn resume-backend.main:app --host 0.0.0.0 --port $PORT
